'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn(
        'usersDataGames', // table name
        'age', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'usersDataGames',
        'city',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'usersDataGames',
        'game',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'usersDataGames',
        'wins',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
    ]);
  },
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('usersDataGames', { id: Sequelize.INTEGER });
     */
  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
