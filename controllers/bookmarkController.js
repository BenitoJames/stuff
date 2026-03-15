//bookmarkController

const Bookmark = require('../model/bookmarkModel');
const Establishment = require('../model/establishmentModel');

const toggleBookmark = async (req, res) => {
  try {
    const userId = req.session.userId; 
    if (!userId) return res.status(401).json({ message: 'Login required' });

    const { establishmentId } = req.params;

    // Check if establishment exists
    const establishment = await Establishment.findById(establishmentId);
    if (!establishment) return res.status(404).json({ message: 'Establishment not found' });

    // Check if bookmark exists
    const existing = await Bookmark.findOne({ userId, establishmentId });
    if (existing) {
      await existing.deleteOne();
      return res.status(200).json({ message: 'Bookmark removed' });
    }

    const bookmark = new Bookmark({ userId, establishmentId });
    await bookmark.save();
    res.status(200).json({ message: 'Bookmarked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { toggleBookmark };