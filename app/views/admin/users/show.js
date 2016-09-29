$('#tickets').html("<%= escape_javascript(render 'admin/topics/tickets') %>");
$('.ticket-stats').html("<%= j render 'admin/topics/ticket_stats' %>");
$('#user-info').html("<%= j render 'admin/users/user_info_horizontal' if @user %>");

window.location.hash = 'user_profile_<%= @user.id %>';
$('#ticket-page-title').show().html("<%= @user.name.titleize %> <span class='hidden-xs pull-right'> <%= j link_to t(:open_new_discussion, default: 'Open Discussion'), new_admin_topic_path, remote: true, class: 'btn btn-primary' %></span> <span class='edit-user hidden-xs pull-right'><%= j link_to link_to t(:edit_user, default: 'Edit User'), edit_admin_user_path(@user), remote: true, class: 'btn btn-primary' %></span> <%= escape_javascript(render 'admin/topics/ticket_nav_dropdown') %>");

// Empty ticket search field
$('q').val();

// Update timestamps
$('.last-active time[data-time-ago]').timeago();

// Send ping to GA
ga('send', 'pageview');

// jQuery hook
Helpy.ready();
Helpy.track();

// RTL changes?
<%= "Helpy.rtl();" if rtl? %>
