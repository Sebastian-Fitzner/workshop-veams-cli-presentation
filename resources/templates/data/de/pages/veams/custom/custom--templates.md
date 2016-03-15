The template engine is lodash (ejs). 

But let's get into a template example (`SCSS`):


``` ejs
/* ===================================================
<% if (bpType === 'c-') { %>Component<% } else if (bpType === 'b-') { %>Block<% } else { %>Global<% } %>: <%= filename %>
=================================================== */

<% if (bpType === 'c-') { %>
/* ---------------------------------------------------
Global Styles
--------------------------------------------------- */
[data-css="c-<%= filename %>"] {
}

/* ---------------------------------------------------
Context: Default
--------------------------------------------------- */<% } %>

.<%= bpType %><%= filename %><% if (bpType === 'c-') { %>--default<% } %> {
}
```