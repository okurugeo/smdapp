declare module "react-native-admob" {
  import { Component } from "react";
  import { ViewProps } from "react-native";

  export interface AdMobBannerProps extends ViewProps {
    adUnitID: string;
    adSize?:
      | "banner"
      | "largeBanner"
      | "mediumRectangle"
      | "fullBanner"
      | "leaderboard"
      | "smartBannerPortrait"
      | "smartBannerLandscape";
    testDevices?: string[];
    onAdLoaded?(): void;
    onAdFailedToLoad?(error: Error): void;
    onAdOpened?(): void;
    onAdClosed?(): void;
    onAdLeftApplication?(): void;
  }

  export class AdMobBanner extends Component<AdMobBannerProps> {}

  // Add other components or modules if needed
}
