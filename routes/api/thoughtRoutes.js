const router = require('express').Router();
const {addThoughts,getSinglethought,addThought,updateThought,deleteThought,createReaction,removeReaction,} = require('../../controllers/thoughtController');


router.route('/').get(addThoughts).post(addThought);
router.route('/:thoughtId').get(getSinglethought).put(updateThought).delete(deleteThought)
router.route('/reaction/:thoughtId').post(createReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;