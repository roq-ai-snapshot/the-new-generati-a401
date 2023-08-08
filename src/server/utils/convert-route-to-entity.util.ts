const mapping: Record<string, string> = {
  blogs: 'blog',
  courses: 'course',
  'learning-resources': 'learning_resource',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
