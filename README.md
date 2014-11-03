Manage databases with grunt!
===========================

## Installation

```bash
npm i -D grunt-db
```

## Usage

```js

// gruntfile

grunt.initConfig({
  db: {
    options: {
      username: 'username',
      password: 'password',
      dialect: 'mysql',
    },

    create: 'example',
    drop: 'example'
  },
})

```

### Options

The options object can specify anything that [manage-database](https://www.npmjs.org/package/manage-database) understands: `user` or `username`, `database` (template for postgres), `password`, `port`, `host` and `dialect`.
