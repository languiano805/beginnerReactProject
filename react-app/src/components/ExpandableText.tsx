import React from 'react'

interface Props {
    children: string;
    wordCount?: number;
}

const ExpandableText = ({children, wordCount = 10}: Props) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    const words = children.split(' ');
    const displayWords = isExpanded ? words : words.slice(0, wordCount);
  return (
    <div>
        {displayWords.join(' ')}
        {words.length > wordCount && (
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Show less' : 'Show more'}
            </button>
        )}
    </div>
  )
}

export default ExpandableText
