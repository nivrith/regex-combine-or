export default function regexCombineOr( ...regexes: RegExp[] ) {
  let combinedStr = '';
  for ( const [ index, re ] of regexes.entries() ) {
    const wrapped = `\(${re.source}\)`;
    if ( index === regexes.length - 1 ) {
      combinedStr += wrapped;
    } else {
      combinedStr += wrapped + '|';
    }
  }
  return new RegExp( combinedStr );

}