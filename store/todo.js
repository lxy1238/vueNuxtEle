export const state = () => {
  return {
    name: 'luoxuyou',
    age: 123
  }
}

export const getters = {
  mobileLayout: state => state.mobileLayout
}