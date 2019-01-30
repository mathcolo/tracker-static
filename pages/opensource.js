const Tram = require('tram-one')
const html = Tram.html()
module.exports = (store, actions) => {
  return html`<div style='padding: 10px;'>
  <div>
  Bulma CSS framework: <br /><br />

    The MIT License (MIT)<br />
    <br />
    Copyright (c) 2018 Jeremy Thomas<br />
    <br />
    Permission is hereby granted, free of charge, to any person obtaining a copy<br />
    of this software and associated documentation files (the "Software"), to deal<br />
    in the Software without restriction, including without limitation the rights<br />
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />
    copies of the Software, and to permit persons to whom the Software is<br />
    furnished to do so, subject to the following conditions:<br />
    <br />
    The above copyright notice and this permission notice shall be included in<br />
    all copies or substantial portions of the Software.<br />
    <br />
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br />
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br />
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN<br />
    THE SOFTWARE.<br />
    </div>
    <div style='margin-top: 20px;'>
    date-fns: <br /><br />
    Copyright © 2019 Sasha Koss<br />
    <br />
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br />
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
<br />
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </div>

  </div>
  `
}
