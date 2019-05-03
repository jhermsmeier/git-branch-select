# `git-branch-select`
[![npm](http://img.shields.io/npm/v/git-branch-select.svg?style=flat-square)](https://npmjs.com/git-branch-select)
[![npm license](http://img.shields.io/npm/l/git-branch-select.svg?style=flat-square)](https://npmjs.com/git-branch-select)
[![npm downloads](http://img.shields.io/npm/dm/git-branch-select.svg?style=flat-square)](https://npmjs.com/git-branch-select)

Interactive (local) branch selection in your repositories.

## Install via [npm](https://npmjs.com)

```sh
$ npm install --global git-branch-select
```

## Usage

```sh
$ git branch-select [search]
# Alias it in your .gitconfig for added convenience,
# for example: bs = branch-select
```

```
~/C/node-bencode (bignum-support) $ git branch-select
? Select a branch: ›
❯ bignum-support
  feature/streams
  housekeeping
  master
```

```
~/C/node-bencode (bignum-support) $ git branch-select stre
? Select a branch: › stre
❯ feature/streams
  master
```
