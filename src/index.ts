enum TOKEN {
  IDENTIFIER = 'IDENTIFIER',
  NUMBER = 'number',
  OPEN_CURLY = '{',
  CLOSE_CURLY = '}',
  OPEN_PAREN = '(',
  CLOSE_PAREN = ')',
  COMMA = ',',
  SEMI_COLAN = ';',
  EQUAL = '=',
  FUNCTION = 'function',
  EOF = 'eof',
  LET = 'let',
  CONST = 'const',
  PRINT = 'print',
}

import fs from 'fs/promises'

const TOKEN_DELIMITER = [
  '}',
  '{',
  '(',
  ')',
  '=',
  ';',
  ' ',
  '\t',
  '\n',
  '\r',
  ';',
]

interface TokenItem {
  type: TOKEN
  val: any
}

class Parser {
  async readFile(filePath: string) {
    try {
      return await fs.readFile(filePath, {})
    } catch (error) {
      console.error(error)
    }
  }

  createToken(type: TOKEN, val: any): TokenItem {
    return { type, val }
  }

  parseToken(ctx: string) {
    let tokenList: TokenItem[] = []
    let index = 0
    let str = ''
    while (index < ctx.length) {
      str += ctx[index]
      if (this.isDelimiter(str)) {
        // tokenList.push(this.createToken())
      } else {
        switch (str) {
          case TOKEN.OPEN_PAREN:
            break
          case TOKEN.CLOSE_PAREN:
            break
          default:
            break
        }
      }
    }
    tokenList.push(this.createToken(TOKEN.EOF, 'eof'))
    return tokenList
  }

  isDelimiter(character) {
    return TOKEN_DELIMITER.includes(character)
  }

  run(tokenList: TokenItem[]) {
    console.error('Not Implemented')
  }
}
export default Parser
