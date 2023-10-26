import { classNames } from './classNames'

describe('classNames', () => {
  test('test first parameter', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('test additional classes', () => {
    const expected = 'someClass cl1 cl2'
    expect(classNames('someClass', {}, ['cl1', 'cl2'])).toBe(expected)
  })
  test('test mods', () => {
    const expected = 'someClass hovered active'
    expect(classNames(
      'someClass',
      { hovered: true, active: true }
    )).toBe(expected)
  })
  test('test mods false', () => {
    const expected = 'someClass active'
    expect(classNames(
      'someClass',
      { hovered: false, active: true }
    )).toBe(expected)
  })
  test('test mods undefined', () => {
    const expected = 'someClass active'
    expect(classNames(
      'someClass',
      { hovered: undefined, active: true }
    )).toBe(expected)
  })
})
