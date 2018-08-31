$(document).ready(function(){
    console.log('sanity');

    $.ajax({
        method: 'GET',
        url: '/api',
        success: handleSuccess,
        error: handleError,
    });

    function handleSuccess (json) {
        console.log(json);
        var obj = json
        var str = JSON.stringify(obj, undefined, 4);
        output(syntaxHighlight(str));
    };

    function handleError(e) {
        console.log('error', e);
    }
});


function output(inp) {
    document.getElementById('apiOutput').appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

