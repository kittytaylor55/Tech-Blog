const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Post = require('./Posts');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Post.hasMany(Post, {
  foreignKey: 'id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
