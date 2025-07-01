# Native Stylist

[![npm version](https://img.shields.io/npm/v/native-stylist)](https://www.npmjs.com/package/native-stylist)

Native Stylist is an npm package designed to streamline the process of styling React Native components. It provides a set of utilities to manage styles more efficiently and consistently.

This was inspired by, but is way less powerful than, [Tailwind CSS](https://tailwindcss.com/) + [NativeWind](https://www.nativewind.dev/).

## React 19 Compatibility

This library is now compatible with React 19! The following changes were made to ensure compatibility:

- Updated TypeScript configuration to use `"jsx": "react-jsx"`
- Updated React types to `@types/react": "^19.0.0"`
- Refactored HOCs to use `forwardRef` instead of `FC<PropsWithChildren<...>>`
- Improved context typing with proper default values
- Added proper error handling for context usage

## Table of Contents

- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Fonts and Colors](#fonts-and-colors)

## Installation

You can install Native Stylist using npm or yarn:

```sh
npm install native-stylist
```

or

```sh
yarn add native-stylist
```

## Peer Dependencies

This library requires:
- React >= 18.0.0
- React Native >= 0.70.0

## API

### `<View />` Component

The `View` component exported from Native Stylist is an enhanced version of the standard React Native `View` component. It supports additional boolean properties for margins and paddings, making it easier to apply spacing.

The spacing unit is 8. In the future I'd like to allow for changing this, but for now it's set.

#### Margin Properties

- `m1` to `m8`: Sets margin of 1 to 8 units on all sides.
- `mt1` to `mt8`: Sets margin top of 1 to 8 units.
- `mr1` to `mr8`: Sets margin right of 1 to 8 units.
- `mb1` to `mb8`: Sets margin bottom of 1 to 8 units.
- `ml1` to `ml8`: Sets margin left of 1 to 8 units.
- `mHalf`, `mtHalf`, `mrHalf`, `mbHalf`, `mlHalf`: Sets margin on one or all sides to a half unit

#### Padding Properties

- `p1` to `p8`: Sets padding of 1 to 8 units on all sides.
- `pt1` to `pt8`: Sets padding top of 1 to 8 units.
- `pr1` to `pr8`: Sets padding right of 1 to 8 units.
- `pb1` to `pb8`: Sets padding bottom of 1 to 8 units.
- `pl1` to `pl8`: Sets padding left of 1 to 8 units.
- `pHalf`, `ptHalf`, `prHalf`, `pbHalf`, `plHalf`: Sets padding on one or all sides to a half unit

#### Gap Properties

- `gap1` to `gap8`: Sets gap of 1 to 8 units between children.

#### Grow/Shrink Properties

- `grow1`: Sets `{ flexGrow: 1 }`
- `shrink1`: Sets `{ flexShrink: 1 }`

#### Layout

- `absolute`: Sets `{ position: 'absolute' }`
- `relative`: Sets `{ position: 'relative' }`
- `pinToTop`: Sets `{ top: 0 }`
- `pinToRight`: Sets `{ right: 0 }`
- `pinToBottom`: Sets `{ bottom: 0 }`
- `pinToLeft`: Sets `{ left: 0 }`
- `fullWidth`: Sets `{ width: '100%' }`
- `halfWidth`: Sets `{ width: '50%' }`
- `flex1`: Sets `{ flex: 1 }`
- `flexRow`: Sets `{ flexDirection: 'row' }`
- `flexColumn`: Sets `{ flexDirection: 'column' }`
- `justifyStart`: Sets `{ justifyContent: 'flex-start' }`
- `justifyCenter`: Sets `{ justifyContent: 'center' }`
- `justifyEnd`: Sets `{ justifyContent: 'flex-end' }`
- `justifyBetween`: Sets `{ justifyContent: 'space-between' }`
- `justifyAround`: Sets `{ justifyContent: 'space-around' }`
- `alignStart`: Sets `{ alignItems: 'flex-start' }`
- `alignCenter`: Sets `{ alignItems: 'center' }`
- `alignEnd`: Sets `{ alignItems: 'flex-end' }`
- `z1` to `z4`: Sets `zIndex` to 1 to 4
- `br1` to `br4`: Sets `borderRadius` to 14, 8, 16, and 32 units
- `overflowHidden`: Sets `{ overflow: 'hidden' }`

#### Shadow Properties

- `shadow`: Sets a shadow with a default configuration
- `shadowUp`: Sets a shadow that goes up, good for using on a fix bottom bar

#### Background Color Properties

(This needs to be improved)

- `bgWhite`: Sets background color to white
- `bgGray`: Sets background color to gray

### `<Text />` Component

The `Text` component exported from Native Stylist is an enhanced version of the standard React Native `Text` component. It supports additional boolean properties for margins and paddings, making it easier to apply spacing.

The spacing unit is 8. In the future I'd like to allow for changing this, but for now it's set.

#### Color Properties

- `light`: Sets `{ color: '#ffffff' }`
- `lightish`: Sets `{ color: '#757575' }`
- `error`: Sets `{ color: '#B30000' }`
- `brand`: Sets the color to the brand color (see ###Customization)

#### Size, Weight, and Style Properties

- `bold`: Sets `{ fontWeight: 'bold' }` or `{ fontFamily: 'your-specified-bold-font`} if set.
- `small` Sets `{ fontSize: 16 }` - This is the default size
- `xsmall` Sets `{ fontSize: 14 }`
- `medium` Sets `{ fontSize: 20 }`
- `large` Sets `{ fontSize: 24 }`
- `xlarge` Sets `{ fontSize: 32 }`
- `xxlarge` Sets `{ fontSize: 48 }`
- `underline`: Sets `{ textDecorationLine: 'underline' }`
- `strikeThrough`: Sets `{ textDecorationLine: 'line-through' }`
- `italic`: Sets `{ fontStyle: 'italic' }`

#### Other Properties

- `shadow`: Sets a shadow with a default configuration
- `center`: Sets `{ textAlign: 'center' }`


#### Margin Properties

- `m1` to `m8`: Sets margin of 1 to 8 units on all sides.
- `mt1` to `mt8`: Sets margin top of 1 to 8 units.
- `mr1` to `mr8`: Sets margin right of 1 to 8 units.
- `mb1` to `mb8`: Sets margin bottom of 1 to 8 units.
- `ml1` to `ml8`: Sets margin left of 1 to 8 units.
- `mHalf`, `mtHalf`, `mrHalf`, `mbHalf`, `mlHalf`: Sets margin on one or all sides to a half unit

#### Padding Properties

- `p1` to `p8`: Sets padding of 1 to 8 units on all sides.
- `pt1` to `pt8`: Sets padding top of 1 to 8 units.
- `pr1` to `pr8`: Sets padding right of 1 to 8 units.
- `pb1` to `pb8`: Sets padding bottom of 1 to 8 units.
- `pl1` to `pl8`: Sets padding left of 1 to 8 units.
- `pHalf`, `ptHalf`, `prHalf`, `pbHalf`, `plHalf`: Sets padding on one or all sides to a half unit


## Usage

```JSX
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Text, View } from 'native-stylist';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text ml2 xlarge bold>
          This is a Title
        </Text>
        <Text ml2 medium lightish>
          Maybe a subtitle here
        </Text>
        <View pt4 pl2 pr2 flexRow justifyBetween>
          <Text>I am on the left</Text>
          <Text>right over here</Text>
        </View>

        <View mt4 flexRow gap1 style={{ height: 100 }}>
          <View
            p1
            flex1
            alignStart
            justifyStart
            style={{ backgroundColor: 'red', alignItems: 'flex-start' }}>
            <Text light>Red</Text>
          </View>
          <View
            p1
            flex1
            alignCenter
            justifyCenter
            style={{ backgroundColor: 'green' }}>
            <Text light>Green</Text>
          </View>
          <View
            p1
            flex1
            alignEnd
            justifyEnd
            style={{ backgroundColor: 'blue' }}>
            <Text light>Blue</Text>
          </View>
        </View>

        <View mt4 relative style={{ height: 200, backgroundColor: '#ff7800' }}>
          <View m2 absolute z1 pinToTop pinToRight bgWhite shadow br2 p1>
            <Text bold>X</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

<image width="350px" src="./example1.png" style="margin: 0 auto;" />

## Examples

### Fonts and Colors

Instead of using the default colors and fonts, you can customize them by using the `StylistTheme` context provider. This will allow you to set your own colors and fonts in once place. You'll need to wrap your app with this provider

```JSX
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Text, View, StylistTheme } from 'native-stylist';

export default function App() {
  return (
    <SafeAreaProvider>
      <StylistTheme.Provider
        value={{
          fontFamily: 'maven-pro',
          fontFamilyBold: 'maven-pro-black',
          brandColor: colors.green,
        }}
      >
        <Text>This text and any further text nested inside the provider will have its `fontFamily` set to `maven-pro` and bold `fontFamily` set to `maven-pro-black.</Text>
        <Text brand>This text color will match that passed in the `brandColor` valu ein the provider.</Text>
      </StylistTheme>
    </SafeAreaProvider>
  );
```

### Setup Theme Provider

```tsx
import { StylistTheme } from 'native-stylist';

const theme = {
  brandColor: '#007AFF',
  accentColor: '#FF3B30',
  fontFamily: 'System',
  fontFamilyBold: 'System-Bold',
};

function App() {
  return (
    <StylistTheme.Provider value={theme}>
      {/* Your app components */}
    </StylistTheme.Provider>
  );
}
```

### Using Components

```tsx
import { View, Text, Button } from 'native-stylist';

function MyComponent() {
  return (
    <View flex1 p2>
      <Text large bold>Hello World</Text>
      <Button
        title="Press Me"
        variant={ButtonVariant.Primary}
        onPress={() => console.log('Pressed!')}
      />
    </View>
  );
}
```

### Available Components

- `View` - Enhanced View with spacing, layout, shadow, and color props
- `Text` - Enhanced Text with typography and styling props
- `Button` - Styled button with variants
- `TextInput` - Enhanced TextInput
- `Image` - Enhanced Image
- `TouchableOpacity` - Enhanced TouchableOpacity

### Spacing Props

All components support spacing props:
- `m1`, `m2`, `m3`, `m4`, `m6`, `m8` - margin
- `p1`, `p2`, `p3`, `p4`, `p6`, `p8` - padding
- `mt1`, `mb1`, `ml1`, `mr1` - directional margin
- `pt1`, `pb1`, `pl1`, `pr1` - directional padding
- `gap1`, `gap2`, `gap3`, `gap4`, `gap6`, `gap8` - gap

### Layout Props

- `flex1`, `flexRow`, `flexColumn`
- `alignStart`, `alignCenter`, `alignEnd`
- `justifyStart`, `justifyCenter`, `justifyBetween`, `justifyAround`, `justifyEnd`
- `fullWidth`, `halfWidth`
- `br1`, `br2`, `br3`, `br4` - border radius

### Button Variants

- `ButtonVariant.Flat`
- `ButtonVariant.Primary`
- `ButtonVariant.Secondary`
- `ButtonVariant.Accent`
- `ButtonVariant.Gray`
- `ButtonVariant.Success`
- `ButtonVariant.Danger`

## Migration from React 18

If you're upgrading from React 18, no code changes are required. The library maintains backward compatibility while adding React 19 support.

## TypeScript

This library is written in TypeScript and provides full type safety for all props and components.
