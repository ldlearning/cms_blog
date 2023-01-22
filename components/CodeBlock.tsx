import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
function CodeBlock ({codeString} : any)  {
    return (
        <SyntaxHighlighter language="javascript">
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;