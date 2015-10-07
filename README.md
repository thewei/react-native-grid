## react-native-grid ![NPM version](https://img.shields.io/npm/v/react-native-grid.svg?style=flat)

The 24-column grid component for react-native

### Installation
```bash
$ npm install react-native-grid
```

### Example
```js
'use strict';

import React from 'react-native';
import reactNativeGrid from 'react-native-grid';
const { Grid, Col } = reactNativeGrid;
const { Text } = React;

export default class Example extends React.Component {
	render(){
		<Grid>
          <Col span={12}>
			<Text>box-1</Text>
          </Col>
          <Col span={12}>
			<Text>box-2</Text>
          </Col>
        </Grid>
	}
}

```

### API
check this file: `lib/index.js`

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT license
Copyright (c) 2015 thewei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor]()
built upon love by [docor](git+https://github.com/turingou/docor.git) v0.3.0
