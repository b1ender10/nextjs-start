import React from 'react';
import DOMPurify from 'dompurify';

export function parseStrapiText(text: string): React.ReactNode {
    // Заменяем переносы строк на тег <br>
    const textWithLineBreaks = text?.replace(/\n/g, '<br>');

    // Заменяем ссылки на тег <a>
    const textWithLinks = textWithLineBreaks?.replace(
        /((http|https):\/\/[^\s]+)/g,
        '<a href="$1">$1</a>'
    );

    // Санитизируем HTML
    
    const sanitizedHTML = DOMPurify?.sanitize ? DOMPurify?.sanitize(textWithLinks) : textWithLinks;

    // Возвращаем обработанный текст в виде компонента
    return (
        <span dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></span>
    );
}