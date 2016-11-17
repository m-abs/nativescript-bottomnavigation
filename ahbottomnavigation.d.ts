/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHBottomNavigation {
        public static CURRENT_ITEM_NONE: number;
        public static UPDATE_ALL_NOTIFICATIONS: number;
        public setNotification(param0: string, param1: number): void;
        public removeOnTabSelectedListener(): void;
        public setTitleTextSize(param0: number, param1: number): void;
        public hideBottomNavigation(): void;
        public isTranslucentNavigationEnabled(): boolean;
        public setDefaultBackgroundColor(param0: number): void;
        public restoreBottomNavigation(): void;
        public setNotificationMarginLeft(param0: number, param1: number): void;
        public setOnNavigationPositionListener(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.OnNavigationPositionListener): void;
        public getDefaultBackgroundColor(): number;
        public addItem(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem): void;
        public setNotification(param0: com.aurelhubert.ahbottomnavigation.notification.AHNotification, param1: number): void;
        public setOnTabSelectedListener(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.OnTabSelectedListener): void;
        public setCurrentItem(param0: number, param1: boolean): void;
        public setNotificationTextColor(param0: number): void;
        public hideBottomNavigation(param0: boolean): void;
        public setNotificationBackground(param0: android.graphics.drawable.Drawable): void;
        public setUseElevation(param0: boolean): void;
        public isBehaviorTranslationEnabled(): boolean;
        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        public refresh(): void;
        public setBehaviorTranslationEnabled(param0: boolean): void;
        public constructor(param0: android.content.Context);
        public getCurrentItem(): number;
        public getInactiveColor(): number;
        public isForceTint(): boolean;
        public getItemsCount(): number;
        public setTranslucentNavigationEnabled(param0: boolean): void;
        public setTitleState(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState): void;
        public getTitleState(): com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState;
        public restoreBottomNavigation(param0: boolean): void;
        public setNotificationBackgroundColor(param0: number): void;
        public isHidden(): boolean;
        public setSelectedBackgroundVisible(param0: boolean): void;
        public setColored(param0: boolean): void;
        public getAccentColor(): number;
        public setColoredModeColors(param0: number, param1: number): void;
        public removeOnNavigationPositionListener(): void;
        public setUseElevation(param0: boolean, param1: number): void;
        public setTitleTypeface(param0: android.graphics.Typeface): void;
        public setNotification(param0: number, param1: number): void;
        public setNotificationTextColorResource(param0: number): void;
        public onRestoreInstanceState(param0: android.os.Parcelable): void;
        public setAccentColor(param0: number): void;
        public isColored(): boolean;
        public setNotificationTypeface(param0: android.graphics.Typeface): void;
        public setInactiveColor(param0: number): void;
        public removeAllItems(): void;
        public setCurrentItem(param0: number): void;
        public hasImmersive(): boolean;
        public manageFloatingActionButtonBehavior(param0: any/* android.support.design.widget.FloatingActionButton */): void;
        public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
        public onMeasure(param0: number, param1: number): void;
        public addItems<T>(param0: java.util.List<T>): void;
        public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
        public onSaveInstanceState(): android.os.Parcelable;
        public setNotificationBackgroundColorResource(param0: number): void;
        public getItem(param0: number): com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;
        public setDefaultBackgroundResource(param0: number): void;
        public setForceTint(param0: boolean): void;
        public removeItemAtIndex(param0: number): void;
      }
      export module AHBottomNavigation {
        export class OnNavigationPositionListener {
          /**
           * Constructs a new instance of the com.aurelhubert.ahbottomnavigation.AHBottomNavigation$OnNavigationPositionListener interface with the provided implementation.
           */
          public constructor(implementation: {
            onPositionChange(param0: number): void;
          });
          public onPositionChange(param0: number): void;
        }
        export class OnTabSelectedListener {
          /**
           * Constructs a new instance of the com.aurelhubert.ahbottomnavigation.AHBottomNavigation$OnTabSelectedListener interface with the provided implementation.
           */
          public constructor(implementation: {
            onTabSelected(param0: number, param1: boolean): boolean;
          });
          public onTabSelected(param0: number, param1: boolean): boolean;
        }
        export class TitleState {
          public static SHOW_WHEN_ACTIVE: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState;
          public static ALWAYS_SHOW: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState;
          public static ALWAYS_HIDE: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState;
          public static values(): native.Array<com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState>;
          public static valueOf(param0: string): com.aurelhubert.ahbottomnavigation.AHBottomNavigation.TitleState;
        }
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHBottomNavigationAdapter {
        public setupWithBottomNavigation(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigation): void;
        public getNavigationItem(param0: number): com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;
        public constructor(param0: android.app.Activity, param1: number);
        public getPositionByMenuId(param0: number): java.lang.Integer;
        public setupWithBottomNavigation(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigation, param1: native.Array<number>): void;
        public getMenuItem(param0: number): android.view.MenuItem;
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHBottomNavigationBehavior extends com.aurelhubert.ahbottomnavigation.VerticalScrollingBehavior {
        public onNestedDirectionFling(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: number): boolean;
        public static from(param0: android.view.View): com.aurelhubert.ahbottomnavigation.AHBottomNavigationBehavior;
        public constructor(param0: boolean, param1: number);
        public constructor();
        public setTabLayoutId(param0: number): void;
        public onNestedScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: number, param6: number): void;
        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        public layoutDependsOn(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View): boolean;
        public resetOffset(param0: android.view.View, param1: boolean): void;
        public setBehaviorTranslationEnabled(param0: boolean, param1: number): void;
        public removeOnNavigationPositionListener(): void;
        public onDependentViewChanged(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View): boolean;
        public onNestedVerticalOverScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: number, param3: number, param4: number): void;
        public onStartNestedScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: android.view.View, param4: number): boolean;
        public setOnNavigationPositionListener(param0: com.aurelhubert.ahbottomnavigation.AHBottomNavigation.OnNavigationPositionListener): void;
        public onLayoutChild(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: number): boolean;
        public updateSnackbar(param0: android.view.View, param1: android.view.View): void;
        public onDependentViewRemoved(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View): void;
        public onDirectionNestedPreScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: native.Array<number>, param6: number): void;
        public hideView(param0: android.view.View, param1: number, param2: boolean): void;
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHBottomNavigationFABBehavior {
        public layoutDependsOn(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: any/* android.support.design.widget.FloatingActionButton */, param2: android.view.View): boolean;
        public onDependentViewChanged(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: any/* android.support.design.widget.FloatingActionButton */, param2: android.view.View): boolean;
        public constructor(param0: number);
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHBottomNavigationItem {
        public constructor(param0: number, param1: number, param2: number);
        public getTitle(param0: android.content.Context): string;
        public constructor(param0: string, param1: android.graphics.drawable.Drawable);
        public setColor(param0: number): void;
        public constructor(param0: string, param1: number, param2: number);
        public constructor(param0: string, param1: android.graphics.drawable.Drawable, param2: number);
        public setColorRes(param0: number): void;
        public setTitle(param0: string): void;
        public getDrawable(param0: android.content.Context): android.graphics.drawable.Drawable;
        public setDrawable(param0: number): void;
        public getColor(param0: android.content.Context): number;
        public setTitle(param0: number): void;
        public constructor(param0: string, param1: number);
        public setDrawable(param0: android.graphics.drawable.Drawable): void;
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHBottomNavigationViewPager {
        public setPagingEnabled(param0: boolean): void;
        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
        public onTouchEvent(param0: android.view.MotionEvent): boolean;
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class AHHelper {
        public static updateBottomMargin(param0: android.view.View, param1: number, param2: number, param3: number): void;
        public static isTranslucentStatusBar(param0: android.content.Context): boolean;
        public static unwrap(param0: android.content.Context): android.app.Activity;
        public static updateDrawableColor(param0: android.content.Context, param1: android.graphics.drawable.Drawable, param2: android.widget.ImageView, param3: number, param4: number, param5: boolean): void;
        public static updateWidth(param0: android.view.View, param1: number, param2: number): void;
        public static getSoftButtonsBarSizePort(param0: android.content.Context): number;
        public constructor();
        public static updateViewBackgroundColor(param0: android.view.View, param1: number, param2: number): void;
        public static updateTextSize(param0: android.widget.TextView, param1: number, param2: number): void;
        public static getTintDrawable(param0: android.graphics.drawable.Drawable, param1: number, param2: boolean): android.graphics.drawable.Drawable;
        public static updateLeftMargin(param0: android.view.View, param1: number, param2: number): void;
        public static updateAlpha(param0: android.view.View, param1: number, param2: number): void;
        public static updateTopMargin(param0: android.view.View, param1: number, param2: number): void;
        public static updateTextColor(param0: android.widget.TextView, param1: number, param2: number): void;
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export class BuildConfig {
        public static DEBUG: boolean;
        public static APPLICATION_ID: string;
        public static BUILD_TYPE: string;
        public static FLAVOR: string;
        public static VERSION_CODE: number;
        public static VERSION_NAME: string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export abstract class VerticalScrollingBehavior {
        public onNestedDirectionFling(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: number): boolean;
        public onNestedPreFling(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number): boolean;
        public onNestedScrollAccepted(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: android.view.View, param4: number): void;
        public onNestedFling(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: boolean): boolean;
        public constructor();
        public onStopNestedScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View): void;
        public onNestedScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: number, param6: number): void;
        public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        public onSaveInstanceState(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View): android.os.Parcelable;
        public getOverScrollDirection(): number;
        public onNestedVerticalOverScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: number, param3: number, param4: number): void;
        public onStartNestedScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: android.view.View, param4: number): boolean;
        public onNestedPreScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: native.Array<number>): void;
        public getScrollDirection(): number;
        public onDirectionNestedPreScroll(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: android.view.View, param3: number, param4: number, param5: native.Array<number>, param6: number): void;
        public onApplyWindowInsets(param0: any/* android.support.design.widget.CoordinatorLayout */, param1: android.view.View, param2: any /*android.support.v4.view.WindowInsetsCompat*/): any /*android.support.v4.view.WindowInsetsCompat*/;
      }
      export module VerticalScrollingBehavior {
        export class ScrollDirection {
          /**
           * Constructs a new instance of the com.aurelhubert.ahbottomnavigation.VerticalScrollingBehavior$ScrollDirection interface with the provided implementation.
           */
          public constructor(implementation: {
          });
          public static SCROLL_NONE: number;
          public static SCROLL_DIRECTION_DOWN: number;
          public static SCROLL_DIRECTION_UP: number;
        }
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export module notification {
        export class AHNotification {
          public static CREATOR: any; /* android.os.Parcelable.Creator;*/
          public static generateEmptyList<T>(param0: number): java.util.List<T>;
          public isEmpty(): boolean;
          public getText(): string;
          public static justText(param0: string): com.aurelhubert.ahbottomnavigation.notification.AHNotification;
          public constructor();
          public describeContents(): number;
          public getTextColor(): number;
          public getBackgroundColor(): number;
          public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
        export module AHNotification {
          export class Builder {
            public constructor();
            public setTextColor(param0: number): com.aurelhubert.ahbottomnavigation.notification.AHNotification.Builder;
            public setBackgroundColor(param0: number): com.aurelhubert.ahbottomnavigation.notification.AHNotification.Builder;
            public build(): com.aurelhubert.ahbottomnavigation.notification.AHNotification;
            public setText(param0: string): com.aurelhubert.ahbottomnavigation.notification.AHNotification.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module aurelhubert {
    export module ahbottomnavigation {
      export module notification {
        export class AHNotificationHelper {
          public static getTextColor(param0: com.aurelhubert.ahbottomnavigation.notification.AHNotification, param1: number): number;
          public static getBackgroundColor(param0: com.aurelhubert.ahbottomnavigation.notification.AHNotification, param1: number): number;
        }
      }
    }
  }
}
