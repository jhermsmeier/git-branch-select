#!/usr/bin/env node
var exec = require( 'child_process' ).exec
var inquirer = require( 'inquirer' )
var lines = []

exec( 'git branch --no-color', function( error, stdout, stderr ) {

  lines = stdout.replace( /^\s+|\s+$/g, '' ).split( /\r?\n/g )
    .map( function( line ) {
      return line.replace( /^\s+|\s+$/g, '' )
    })
    .sort( function( a, b ) {
      if( a.indexOf( '*' ) === 0 ) return -1
      return a.localeCompare( b )
    })

  if( lines.length ) {
    lines[0] = lines[0].replace( /^\*\s+/, '' )
  }

  var prompt = inquirer.prompt([{
    type: 'list',
    name: 'branch',
    message: 'Select branch',
    default: lines[0],
    choices: lines
  }])

  prompt.then( function( results ) {
    exec( "git checkout \"" + results.branch + "\"", {
      cwd: process.cwd()
    }, function( error, stdout, stderr ) {

      // Only write out the most important part
      process.stdout.write( '\n' )
      process.stdout.write( stdout.toString().split( /\r?\n/g ).pop() )
      process.stderr.write( stderr.toString().split( /\r?\n/g ).shift() )
      process.stdout.write( '\n' )

      // Print status after branch change manually,
      // as `git checkout` doesn't do color output
      exec( 'git status -sb', function( _, stdout, stderr ) {

        process.stdout.write( '\n' )
        process.stdout.write( stdout )
        process.stderr.write( stderr )

        process.exit( error ? error.code : 0 )

      })

    })
  })

})
