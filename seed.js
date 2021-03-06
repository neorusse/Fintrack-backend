const Admin = require('./app/models/admin');

async function createAdmin() {
  let admin;
  try {
    admin = new Admin({
      name: 'James',
      email: 'James1@gmail.com',
      phone: '3434234234',
      isSuper: true,
      password: '1234567890'
    });
    await admin.save();
    console.log({ admin: admin.transformUser(), accessToken: admin.token() });
  } catch (error) {
    admin = await Admin.loginAndGenerateToken({
      email: 'James1@gmail.com',
      password: '1234567890'
    });
    console.log(admin);
  }
}

createAdmin();

module.exports = {};
