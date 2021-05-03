// available editor options
const _actionFuncs = {
    header: (txt = 'HEADER', lvl = 1) => {
        const t = txt.replace(/#*/, '').replace(/^\s*/, '');
        return `${'#'.repeat(lvl)} ${t}`;
    },
    bold: (txt = 'BOLD') => {
        const _t = txt.match(/^\_\_(.*?)\_\_$/);
    
        if (_t && _t.length == 2) {
            return _t[1];
        };
    
        const __t = txt.match(/^\*\*(.*?)\*\*$/);
    
        if (__t && __t.length == 2) {
            return __t[1];
        };
    
        return `__${txt}__`;
    },
    italicize: (txt = 'ITALIC') => {
        const _t = txt.match(/^\_([^\*])\_$/);
    
        if (_t && _t.length == 2) {
            return _t[1];
        };
    
        const __t = txt.match(/^\*([^\*])\*$/);
    
        if (__t && __t.length == 2) {
            return __t[1];
        };
    
        return `_${txt}_`;
    },
    strike: (txt = 'STRIKE') => {
        const _t = txt.match(/^\~\~(.*?)\~\~$/);
    
        if (_t && _t.length == 2) {
            return _t[1];
        };
    
        return `~~${txt}~~`;
    },
    quote: (txt = 'BLOCKQUOTE') => {
        const _t = txt.match(/^\>(.*?)\n\n$/sm);
    
        if (_t && _t.length == 2) {
            return _t[1].replace(/^\s*/, '');
        };
    
        return `> ${txt}\n\n`;
    },
    code: (txt = 'CODE', ml = true) => {
        let res = '';
        if (ml) {
            const _t = txt.match(/\`\`\`\n(.*?)\n\`\`\`/sm);
    
            if (_t && _t.length == 2) {
                return _t[1];
            };
    
            res = `\`\`\`\n${txt}\n\`\`\``;
    
        } else {
            const __t = txt.match(/^\`(.*?)\`$/);
    
            if (__t && __t.length == 2) {
                return __t[1];
            };
    
            res = `\`${txt.replace(/\n/g, '')}\``;
        };
    
        return res;
    },
    list: (txt = '', ord = false) => {
        const itemMark = ord? '1. ': '* ';
        const markRegEx = ord? /1\.\s/: /\*\s/;
    
        const mI = (t = '', m = itemMark) => {
            if (t.search(markRegEx) > -1) {
                return t.replace(markRegEx, '');
            } else {
                const _pos = t.search(/[^\s]/);
                return _pos > -1? `${t.substring(0, _pos)}${m}${t.substring(_pos)}`: `${m}${t}`;
            }
        };
    
        const _t = txt.match(/^(.*?)$/gsm);
    
        if (_t && _t.length > 1) {
            return _t.map((__t) => mI(__t)).join('\n');
        };
    
        return mI(txt);
    }
};


const _actions = new Map ([
    ['bold', _actionFuncs.bold],
    ['italic', _actionFuncs.italicize],
    ['strike', _actionFuncs.strike],
    ['quote', _actionFuncs.quote],
    ['code', _actionFuncs.code],
    ['s-code', ((txt = '') => _actionFuncs.code(txt, false))],
    ['bullets', ((txt = '') => _actionFuncs.list(txt))],
    ['numbers', ((txt = '') => _actionFuncs.list(txt, true))],
    ['link', ((txt = 'LINK', to = '#', title = '') => `[${txt}](${to}${title? ' ' + title: ''})`)],
    ['image', ((altTxt = '', src = '', title = '') => `[${altTxt}](${src}${title? ' ' + title: ''})`)],
    ['line', (() => "- - -")]
].concat(Array.from(Array(6), (_, i) => ++i).map((h) => {
    return [`h${h}`, ((txt = '') => _actionFuncs.header(txt, h))];
})))


























const edt = document.getElementById('note-edit');


// get the position of the cursor on the textarea
const getCursorPos = (editor = edt) => ({start: editor.selectionStart, end: editor.selectionEnd});


// get selected text
const getTextAtPos = (pos = getCursorPos(), txt = edt.value) => txt.substring(pos.start, pos.end);

// insert text to editor
function insertText (newText = '', wh = edt, pos = getCursorPos()) {
    const og = wh.value;
    wh.value = og.substring(0, pos.start) + newText + og.substring(pos.end);
    wh.selectionStart = pos.start;
    wh.selectionEnd = pos.end;
};





