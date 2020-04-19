import React from 'react';
import { mdx } from 'mdx.macro';

export const ProjectFlutter = mdx`

# Project Struture

In Touch Flutter app project is designed to be easy to add new pages and change existing ones

Folder Structure:
<code>
./android  <br/>
./lib  <br/>
&emsp;&emsp;&emsp;&emsp;/ui<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;/shared<br/>
</code><br/>

| Folder             | Usage        |
| --------------------- | ------------- |
| Android   &emsp;&emsp;| Android package files  |
| Lib                   | All source code is located here |
| UI                    | Pages and UI     |
| Shared                | Shared components |
<br/>


#### Android

- Change Build settings here
- Change Project Logo and package

#### Lib

Flutter source code folder, this is where all the dart files are located for flutter.

#### UI
Dart files for UI related pages. Each file is a new page.
- callHistoryPage - Shows user's call history
- homePage - Home containing infoPage, callHistoryPage, profilePage
- infoPage - Shows covid19 status
- loginPage - Login form to login
- phoneNumberPage - Phone number form before verification
- profilePage - Shows user profile and custom settings
- signUpPage - Sign up form to register
- welcomePage - Welcome page for new users

#### Shared

Shared components that are used in multiple pages.
- Validator - used to validate email and display name.
- Input form widget component.

`

