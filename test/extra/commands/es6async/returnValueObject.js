module.exports = {
  async command(value) {
    await this.pause(10);

    return value;
  }
};
