import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ActionSheetController, ActionSheetOptions } from '@ionic/angular';
import { DataService } from '../data/data.service';
import { HelpersService } from '../helpers/helpers.service';
import { Image } from '../../interfaces/image.interface';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  image:Image ={};
  images:Image[]=[];
  imageName:string='';
  imagesNames:string[]=[];
  set Image(image:Image){
    this.image = image;
  }
  get ImageName():string{
    return this.imageName
  }
  set ImageName(name:string){
     this.imageName = name
  }
  get ImagesNames():string[]{
    return this.imagesNames
  }
  set ImagesNames(names:string[]){
     this.imagesNames = names
  }
  get Image():Image{
    return this.image;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private actSheet:ActionSheetController,
    private data:DataService,
    private helpers:HelpersService
  ) { };
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  async ActionSheetChooseImage():Promise<any>{
    const options : ActionSheetOptions ={
      header:'اختيار صورة',
      buttons:[
        {
          text:'افتح المعرض',
          icon:'image-outline',
          handler:async()=>{
          const image:Image = await this.selectImageFromDevice();
          await ActSheet.dismiss(image);
          }
        },
        {
          text:'التقط صورة',
          icon:'camera-outline',
          handler:async()=>{
          const image:Image = await this.takeAphoto();
          await ActSheet.dismiss(image);
          }
        }
      ]
    }
    const ActSheet = await  this.actSheet.create(options);
    await ActSheet.present();
    const data = await ActSheet.onDidDismiss();
    console.log(this.images);

    return data.data;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  private async selectImageFromDevice():Promise<any>{
    const options:ImageOptions = {
      quality:50,
      allowEditing:false,
      resultType:CameraResultType.DataUrl,
      source:CameraSource.Photos,
    }
    const image = await Camera.getPhoto(options);
    if (image){
      this.helpers.StopLoading()
      this.procesImage(image);
    }
    else{
      return;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  private async takeAphoto():Promise<any>{
    const options:ImageOptions = {
      quality:50,
      allowEditing:false,
      resultType:CameraResultType.DataUrl,
      saveToGallery:true,
      source:CameraSource.Camera,
      correctOrientation:false
    }
    const image = await Camera.getPhoto(options);
    console.log("🚀 ~ UploadService ~ takeAphoto ~ image:", image)

    if (image){
      this.procesImage(image);
    }
    else{
      console.log(`Choosing images was canceled`);
      return;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  private procesImage(photo:Image):Image{

    const image:Image = {
      name: new Date().getTime()+`.${photo.format}`,
      data:photo.dataUrl
    }
    this.images?.push(image);
    this.image = image;
    return image;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  private async setImageFormData(image:Image){
    let fData = new FormData();
    const data = await fetch(image.data as string);
    const blob = await data.blob();
    fData.append('image', blob,image.name);
    return fData;
  }



  ////////////////////////////////////////////////////////////////////////////////////////////////////

  private async setImagesFormDatas(images:Image[]){
    const formDatas = [];
    for (const image of images){
      const fData = await this.setImageFormData(image);
      formDatas.push(fData);
    }
    return formDatas;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  clearImage(){
    this.image = {};
    this.imageName = '';
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  async uploadImage(image: Image | undefined) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        if (!image || image == undefined || image.data == undefined) {
          this.helpers.StopLoading();
          return this.helpers.PresentGenericToaster({ message: 'يجب تحديد صورة' });
        }
        const ImageData = await this.setImageFormData(image);
        await this.helpers.StartLoading({ message: 'جاري تحميل الصورة' });
        this.data.postData(`/upload/image`, ImageData).subscribe(
          async (res: any) => {
            this.imageName = res.image;
            this.helpers.StopLoading();
            resolve(res.image);
          },
          (err) => {
            this.helpers.PresentGenericToaster({ message: 'حجم الصورة كبير او غير صالحة' });
            this.clearImage();
            this.helpers.StopLoading();
            reject(err);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
}


async uploadMultiple(images: Image[]): Promise<string[]> {
  const imageNames: string[] = [];
  try {
    for (const image of images) {
      const imageName = await this.uploadImage(image);
      imageNames.push(imageName);
    }
    return imageNames;
  } catch (error) {
    console.error('Error uploading multiple images:', error);
    throw error;
  }
}

}
