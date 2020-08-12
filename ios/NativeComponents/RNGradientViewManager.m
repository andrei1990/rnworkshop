//
//  RNGradientViewManager.m
//  rnworkshop
//
//  Created by Andrei Boleac on 11/08/2020.
//

#import "RNGradientViewManager.h"
#import "RNGradientView.h"
@implementation RNGradientViewManager
RCT_EXPORT_MODULE()
- (UIView *)view {
  return [[RNGradientView alloc] init];
}
RCT_EXPORT_VIEW_PROPERTY(progress, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(cornerRadius, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(fromColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(toColor, UIColor);
@end
