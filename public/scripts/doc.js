const state = {
  endpoints: []
};

const buildAttr = attributes => {
  return attributes
    .map(
      attr =>
        `<li>
      <b>${attr.name}</b> - ${attr.description}.
    </li>`
    )
    .join('');
};

const buildDoc = ({ endpoints }) => {
  endpoints.forEach(endpoint => {
    if (endpoint.name) {
      $('#resources-nav').append(
        `<a class="ui segment" href="#${endpoint.name}">${endpoint.name}</a>`
      );
    }

    const template = `
      ${endpoint.name ? `<h3 id=${endpoint.name}>${endpoint.name}</h3>` : ''}
      <section class="doccode">
        <code> ${endpoint.method} ${endpoint.path}</code>
        </section>
        <p>${endpoint.description}</p>
      ${
        endpoint.attributes
          ? `<h5>Attributes</h5>
        <ul class="attr">
        ${buildAttr(endpoint.attributes)}
        </ul>`
          : ''
      }  
    `;
    $('#resources').append(template);
  });
};

const setState = ({ data }) => {
  state.endpoints = data.endpoints;
  buildDoc(state);
};

$.ajax({
  url: '/api/v1/',
  type: 'GET',
  success: setState,
  error: err => console.log(err),
  headers: {
    api_key: 'c3VwZXJfc2VjcmV0X3Bhc3Njb2Rl'
  }
});

$('#base-url').html(`<code>${window.location.origin}/</code>`);
