module.exports = {
  Node: require('./ast/Node').Node,
  Program: require('./ast/Program').Program,
  VariableDeclarator: require('./ast/VariableDeclarator').VariableDeclarator,
  AssignmentExpression: require('./ast/expressions/AssignmentExpression').AssignmentExpression,
  BinaryExpression: require('./ast/expressions/BinaryExpression').BinaryExpression,
  CallExpression: require('./ast/expressions/CallExpression').CallExpression,
  ExistentialExpression: require('./ast/expressions/ExistentialExpression').ExistentialExpression,
  LogicalExpression: require('./ast/expressions/LogicalExpression').LogicalExpression,
  MemberExpression: require('./ast/expressions/MemberExpression').MemberExpression,
  NullCheckCallExpression: require('./ast/expressions/NullCheckCallExpression').NullCheckCallExpression,
  NullCoalescingExpression: require('./ast/expressions/NullCoalescingExpression').NullCoalescingExpression,
  NullPropagatingExpression: require('./ast/expressions/NullPropagatingExpression').NullPropagatingExpression,
  UnaryExpression: require('./ast/expressions/UnaryExpression').UnaryExpression,
  ObjectExpression: require('./ast/expressions/ObjectExpression').ObjectExpression,
  ArrayExpression: require('./ast/expressions/ArrayExpression').ArrayExpression,
  UpdateExpression: require('./ast/expressions/UpdateExpression').UpdateExpression,
  FunctionExpression: require('./ast/expressions/FunctionExpression').FunctionExpression,
  NewExpression: require('./ast/expressions/NewExpression').NewExpression,
  BlockStatement: require('./ast/statements/BlockStatement').BlockStatement,
  ExpressionStatement: require('./ast/statements/ExpressionStatement').ExpressionStatement,
  IfStatement: require('./ast/statements/IfStatement').IfStatement,
  ForStatement: require('./ast/statements/ForStatement').ForStatement,
  VariableDeclarationStatement: require('./ast/statements/VariableDeclarationStatement').VariableDeclarationStatement,
  FunctionDeclarationStatement: require('./ast/statements/FunctionDeclarationStatement').FunctionDeclarationStatement,
  ReturnStatement: require('./ast/statements/ReturnStatement').ReturnStatement,
  BooleanLiteral: require('./ast/literals/BooleanLiteral').BooleanLiteral,
  NumberLiteral: require('./ast/literals/NumberLiteral').NumberLiteral,
  StringLiteral: require('./ast/literals/StringLiteral').StringLiteral,
  Identifier: require('./ast/literals/Identifier').Identifier,
  Property: require('./ast/Property').Property,
};