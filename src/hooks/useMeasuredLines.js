import { useEffect } from 'react';

export function useMeasuredLines(deps = []) {
    useEffect(() => {
        const measure = () => {
            const titles = document.querySelectorAll('.measured-title-text');
            if (titles.length === 0) return;

            let maxWidth = 0;
            titles.forEach(t => {
                if (t.offsetWidth > maxWidth) {
                    maxWidth = t.offsetWidth;
                }
            });

            // Add a small buffer so the line is slightly longer than the text
            const lineWidth = maxWidth > 0 ? maxWidth + 10 : 0;

            // We set the variable on the document root or .page so all lines share the same width
            document.documentElement.style.setProperty('--title-line-width', `${lineWidth}px`);
        };

        measure();

        // We run it again slightly after load in case fonts take time to render
        const timeout1 = setTimeout(measure, 100);
        const timeout2 = setTimeout(measure, 500);

        window.addEventListener('resize', measure);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            window.removeEventListener('resize', measure);
        };
    }, [...deps]);
}
