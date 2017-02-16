import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/dylan/dylan'
import 'codemirror/mode/textile/textile'
import 'codemirror/mode/pegjs/pegjs'
import 'codemirror/mode/factor/factor'
import 'codemirror/mode/asterisk/asterisk'
import 'codemirror/mode/crystal/crystal'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/pug/pug'
import 'codemirror/mode/forth/forth'
import 'codemirror/mode/lua/lua'
import 'codemirror/mode/mumps/mumps'
import 'codemirror/mode/elm/elm'
import 'codemirror/mode/tornado/tornado'
import 'codemirror/mode/d/d'
import 'codemirror/mode/rpm/rpm'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/mode/swift/swift'
import 'codemirror/mode/solr/solr'
import 'codemirror/mode/stex/stex'
import 'codemirror/mode/haskell/haskell'
import 'codemirror/mode/velocity/velocity'
import 'codemirror/mode/properties/properties'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/htmlembedded/htmlembedded'
import 'codemirror/mode/smarty/smarty'
import 'codemirror/mode/tiddlywiki/tiddlywiki'
import 'codemirror/mode/go/go'
import 'codemirror/mode/ttcn/ttcn'
import 'codemirror/mode/slim/slim'
import 'codemirror/mode/tiki/tiki'
import 'codemirror/mode/sieve/sieve'
import 'codemirror/mode/troff/troff'
import 'codemirror/mode/z80/z80'
import 'codemirror/mode/eiffel/eiffel'
import 'codemirror/mode/yaml/yaml'
import 'codemirror/mode/powershell/powershell'
import 'codemirror/mode/vhdl/vhdl'
import 'codemirror/mode/turtle/turtle'
import 'codemirror/mode/ebnf/ebnf'
import 'codemirror/mode/livescript/livescript'
import 'codemirror/mode/haml/haml'
import 'codemirror/mode/jinja2/jinja2'
import 'codemirror/mode/php/php'
import 'codemirror/mode/mathematica/mathematica'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/gherkin/gherkin'
import 'codemirror/mode/q/q'
import 'codemirror/mode/ecl/ecl'
import 'codemirror/mode/perl/perl'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/ntriples/ntriples'
import 'codemirror/mode/cmake/cmake'
import 'codemirror/mode/handlebars/handlebars'
import 'codemirror/mode/modelica/modelica'
import 'codemirror/mode/dockerfile/dockerfile'
import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter'
import 'codemirror/mode/groovy/groovy'
import 'codemirror/mode/oz/oz'
import 'codemirror/mode/twig/twig'
import 'codemirror/mode/pascal/pascal'
import 'codemirror/mode/diff/diff'
import 'codemirror/mode/idl/idl'
import 'codemirror/mode/rst/rst'
import 'codemirror/mode/smalltalk/smalltalk'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/nsis/nsis'
import 'codemirror/mode/mbox/mbox'
import 'codemirror/mode/spreadsheet/spreadsheet'
import 'codemirror/mode/haskell-literate/haskell-literate'
import 'codemirror/mode/dart/dart'
import 'codemirror/mode/octave/octave'
import 'codemirror/mode/mirc/mirc'
import 'codemirror/mode/haxe/haxe'
import 'codemirror/mode/mllike/mllike'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/asn.1/asn.1'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/css/css'
import 'codemirror/mode/pig/pig'
import 'codemirror/mode/xquery/xquery'
import 'codemirror/mode/asciiarmor/asciiarmor'
import 'codemirror/mode/erlang/erlang'
import 'codemirror/mode/scheme/scheme'
import 'codemirror/mode/meta'
import 'codemirror/mode/python/python'
import 'codemirror/mode/coffeescript/coffeescript'
import 'codemirror/mode/clojure/clojure'
import 'codemirror/mode/fcl/fcl'
import 'codemirror/mode/puppet/puppet'
import 'codemirror/mode/brainfuck/brainfuck'
import 'codemirror/mode/http/http'
import 'codemirror/mode/dtd/dtd'
import 'codemirror/mode/r/r'
import 'codemirror/mode/verilog/verilog'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/webidl/webidl'
import 'codemirror/mode/vbscript/vbscript'
import 'codemirror/mode/toml/toml'
import 'codemirror/mode/vb/vb'
import 'codemirror/mode/rust/rust'
import 'codemirror/mode/cypher/cypher'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/django/django'
import 'codemirror/mode/ttcn-cfg/ttcn-cfg'
import 'codemirror/mode/cobol/cobol'
import 'codemirror/mode/commonlisp/commonlisp'
import 'codemirror/mode/soy/soy'
import 'codemirror/mode/stylus/stylus'
import 'codemirror/mode/sparql/sparql'
import 'codemirror/mode/nginx/nginx'
import 'codemirror/mode/sas/sas'
import 'codemirror/mode/mscgen/mscgen'
import 'codemirror/mode/gas/gas'
import 'codemirror/mode/fortran/fortran'
import 'codemirror/mode/apl/apl'
import 'codemirror/mode/julia/julia'
import 'codemirror/mode/tcl/tcl'
import 'codemirror/mode/protobuf/protobuf'
import 'codemirror/mode/yacas/yacas'
import 'codemirror/mode/sass/sass'
import 'codemirror/addon/comment/continuecomment'
import 'codemirror/addon/comment/comment'
import 'codemirror/addon/mode/loadmode'
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/matchesonscrollbar'
import 'codemirror/addon/search/match-highlighter'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/xml-fold'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/indent-fold'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/markdown-fold'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/display/placeholder'

import './index.scss'

class GistEditor extends Component {
  componentDidMount () {
    const { filename } = this.props

    this.editor = this.refs.editor
    this.CodeMirror = this.editor.getCodeMirrorInstance();
    this.CodeMirror.modeURL = '../../../node_modules/codemirror/mode/%N/%N.js'
    this.setMode(filename)
  }

  componentDidUpdate (prevProps, prevState) {
    const { filename } = this.props

    if (prevProps.filename !== filename) {
      this.setMode(filename)
    }
  }

  setMode (filename) {
    let modeInfo = filename && this.CodeMirror.findModeByFileName(filename)
    if (modeInfo == null) modeInfo = this.CodeMirror.findModeByName('Plain Text')
    this.editor.getCodeMirror().setOption('mode', modeInfo.mime)
    this.CodeMirror.autoLoadMode(this.editor.getCodeMirror(), modeInfo.mode)
  }

  render () {
    const { options, value, placeholder } = this.props

    return (
      <CodeMirror
        ref="editor"
        value={ value }
        options={ options }
        placeholder={ placeholder }
        onChange={ value => this.props.onChange(value) }
      />
    )
  }
}

export default GistEditor