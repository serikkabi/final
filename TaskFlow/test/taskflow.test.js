const taskflow = artifacts.require('./taskflow.sol')
contract('taskflow', (accounts) => {
  before(async () => {
    this.taskflow = await taskflow.deployed()
  })
  it('deploys successfully', async () => {
    const address = await this.taskflow.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })
  it('lists tasks', async () => {
    const taskCount = await this.taskflow.taskCount()
    const task = await this.taskflow.tasks(taskCount)
    assert.equal(task.id.toNumber(), taskCount.toNumber())
    assert.equal(task.content, 'Check out list tasks')
    assert.equal(task.completed, false)
    assert.equal(taskCount.toNumber(), 1)
  })
})