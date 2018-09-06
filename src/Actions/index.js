

export const addGroup = name => ({
  type: "ADD_GROUP",
  name
})
//
// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })
//
// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })
//
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
//
// export const filterGroups = {
// 	type: 'SET_GROUP_VISIBILITY'
// 	groupFilter: 'GOOD_ONES'
// }
