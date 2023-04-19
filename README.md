# Vue Shadow Text
A very simple component to easily add a shadow beneath some text to aid readability when overlaying on an image.

Basically it's just adding some simple CSS to the test but it helps not having to remember the syntax.

![Without ShadowText](docs/example.jpg?raw=true "Before")

## Installation

```
npm install vue-shadow-text
```

In main.js

```
import ShadowText from 'vue-shadow-text'

createApp(App)
    .use(ShadowText)
    .mount('#app')
```

## Usage

```
<shadow-text>This text is drop shadowed</shadow-text>
```

## Props

### shadow-color

Specify the shadow color as a string, eg '#FF0000'

### shadow-size

Specify the shadow size as a string, eg "10px" or "0.3em"