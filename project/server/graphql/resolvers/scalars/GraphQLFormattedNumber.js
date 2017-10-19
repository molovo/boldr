import { GraphQLScalarType } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

const GraphQLFormattedNumber = new GraphQLScalarType({
  name: 'FormattedNumber',
  description:
    'The `FormattedNumber` type represents a number that can optionally be returned' +
    'as a formatted String. It does not try to coerce the type.',
  serialize: x => x,
  parseValue: x => x,
  parseLiteral: ast => {
    if (ast.kind !== Kind.STRING || ast.kind !== Kind.INT) {
      const error = `Query error: Can only parse strings and ints, got a: ${ast.kind}`;
      throw new GraphQLError(error, [ast]);
    }

    return ast.value;
  },
});

export default GraphQLFormattedNumber;
