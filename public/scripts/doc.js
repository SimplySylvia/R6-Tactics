const state = {
  endpoints: []
};

const buildAttr = attributes => {
  return attributes
    .map(
      attr =>
        `
        <tr>
          <td class='ui center'>${attr.name}</td>
          <td>${attr.description}</td>
        </tr>`
    )
    .join('');
};

const buildSubpaths = subpaths => {
  return subpaths
    .map(
      sub =>
        `<section class="doccode">
        <code> ${sub.method} ${sub.path}</code>
      </section>
      <p>${sub.description}</p>`
    )
    .join('');
};

const buildDoc = ({ endpoints }) => {
  endpoints.forEach(endpoint => {
    const { name, method, path, description, attributes, subpaths } = endpoint;
    if (name) {
      $('#resources-nav').append(
        `<a class="ui segment" href="#${name}">${name}</a>`
      );
    }

    const template = `
      ${name ? `<h3 id=${name}>${name}</h3>` : ''}
      <section class="doccode">
        <code> ${method} ${path}</code>
      </section>
      <p>${description}</p>
        ${subpaths ? buildSubpaths(subpaths) : ''}
      ${
        attributes
          ? `<h3>Attributes</h3>
        <table class="ui celled table">
        <thead>
        <tr>
        <th>Name</th>
        <th>Description</th>
        </tr>
        </thead>
        ${buildAttr(attributes)}
        </table>
        `
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
