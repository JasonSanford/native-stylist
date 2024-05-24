# Native Stylist

[![npm version](https://img.shields.io/npm/v/native-stylist)](https://www.npmjs.com/package/native-stylist)
[![Build Status](https://img.shields.io/travis/yourusername/native-stylist/master)](https://travis-ci.org/yourusername/native-stylist)
[![License](https://img.shields.io/npm/l/native-stylist)](https://opensource.org/licenses/MIT)

Native Stylist is an npm package designed to streamline the process of styling React Native components. It provides a set of utilities to manage styles more efficiently and consistently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)

## Installation

You can install Native Stylist using npm or yarn:

```sh
npm install native-stylist
```

or

```sh
yarn add native-stylist
```

## Usage

Here is a basic example of how to use Native Stylist in your React Native project:

```javascript
import { View, Text } from 'native-stylist';

export default function App() {
  return (
    <>
      <View p2>
        <Text xlarge bold>Hello, world!</Text>
        <Text medium lightish>How are you doing?</Text>
      </View>
      <View flexRow justifyBetween>
        <Text>
          I'm left!
        </Text>
        <Text>
          I'm right!
        </Text>
      </View>
    </>
  );
}
```

## API

### `<View />` Component

The `View` component exported from Native Stylist is an enhanced version of the standard React Native `View` component. It supports additional boolean properties for margins and paddings, making it easier to apply spacing.

#### Margin Properties

- `m1` to `m8`: Sets margin of 1 to 8 units on all sides.
- `mt1` to `mt8`: Sets margin top of 1 to 8 units.
- `mr1` to `mr8`: Sets margin right of 1 to 8 units.
- `mb1` to `mb8`: Sets margin bottom of 1 to 8 units.
- `ml1` to `ml8`: Sets margin left of 1 to 8 units.

#### Padding Properties

- `p1` to `p8`: Sets padding of 1 to 8 units on all sides.
- `pt1` to `pt8`: Sets padding top of 1 to 8 units.
- `pr1` to `pr8`: Sets padding right of 1 to 8 units.
- `pb1` to `pb8`: Sets padding bottom of 1 to 8 units.
- `pl1` to `pl8`: Sets padding left of 1 to 8 units.

#### Layout

- `flex1`: Sets `{ flex: 1 }`
- `flexRow`: Sets `{ flexDirection: 'row' }`

### Example Usage

```javascript
import React from 'react';
import { View, Text } from 'native-stylist';

export default function App() {
  return (
    <View>
    </View>
  );
}
```

## Examples

### Fonts and Colors


```javascript
// TODO: This
```
