
export interface AnimationOptions {
  mode: 'md' | 'ios';
  animated: boolean;
  direction: 'root' | 'forward' | 'back';
  enteringEl: HTMLElement;
  leavingEl: HTMLElement;
  baseEl: HTMLElement;
  progressAnimation: boolean;
  showGoBack: boolean;
  animationBuilder: (_:any, opts:any) => {}
  progressionCallback?: () => {};
  duration?: number;
}
