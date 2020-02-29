# Angular Email Obfuscation

[![npm](https://img.shields.io/npm/v/ngx-email-obfuscation.svg)](https://www.npmjs.com/package/ngx-email-obfuscation) [![GitHub license](https://img.shields.io/github/license/joejordanbrown/ngx-email-obfuscation)](https://github.com/joejordanbrown/ngx-email-obfuscation/blob/master/LICENSE.md) [![GitHub issues](https://img.shields.io/github/issues/joejordanbrown/ngx-email-obfuscation)](https://github.com/joejordanbrown/ngx-email-obfuscation/issues)

Email Address Obfuscation helps to prevent spam by hiding your email addresses in your angular application from email crawlers, bots and harvesters while remaining visible to your visitors.

### Demo

https://stackblitz.com/edit/ngx-email-obfuscation

### Installation

##### Install the npm package

`npm install ngx-email-obfuscation`

##### Import `NgxEmailObfuscationModule`

```typescript
import { NgxEmailObfuscationModule } from 'ngx-email-obfuscation';

@NgModule({
 imports: [
   ...
   NgxEmailObfuscationModule
 ]
})
```

### Usage

Add `emailObfuscation` directive to the parent element of the email address.

```html
Contact us at <span emailObfuscation>support@example.com</span>
```

### Obfuscation

Using this directive, it will convert `support@example.com` to `moc.elpmaxe@troppus`</code>` which is the reverse, it will use CSS to display the correct way.

On hovering over the email address it will be converted into an anchor tag with a mailto link.

### Issues

Please report bugs and issues [here](https://github.com/joejordanbrown/ngx-email-obfuscation/issues).

### License

MIT © [Joe Jordan Brown](https://github.com/joejordanbrown)