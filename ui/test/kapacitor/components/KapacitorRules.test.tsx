import React from 'react'
import {shallow} from 'enzyme'

import KapacitorRules from 'src/kapacitor/components/KapacitorRules'

import {source, kapacitorRules} from 'test/resources'

const setup = () => {
  const props = {
    source,
    rules: kapacitorRules,
    hasKapacitor: true,
    loading: false,
    onDelete: () => {},
    onChangeRuleStatus: () => {}
  }

  const wrapper = shallow(<KapacitorRules {...props} />)

  return {
    wrapper,
    props
  }
}

describe('Kapacitor.Containers.KapacitorRules', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders the KapacitorRules', () => {
      const {wrapper} = setup()
      expect(wrapper.exists()).toBe(true)
    })

    it('renders KapacitorRulesTable', () => {
      const {wrapper} = setup()

      const kapacitorRulesTable = wrapper.find('KapacitorRulesTable')
      expect(kapacitorRulesTable.length).toEqual(1)

      const tasksTable = wrapper.find('TasksTable')
      expect(tasksTable.length).toEqual(1)
    })

    it('renders TasksTable', () => {
      const {wrapper} = setup()

      const tasksTable = wrapper.find('TasksTable')
      expect(tasksTable.length).toEqual(1)
    })
  })
})
