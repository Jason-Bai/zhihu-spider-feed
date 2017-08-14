// index.js
/*
const db = require('./db');
const table = 'user';

const cols = ['name'];

const row = [ 'baiyu11', 1];
const id = 11;

db.query('select * from user')
  .then(([ rows, fields ]) => { rows.forEach(({ id, name }, index) => {
      console.log(index, id, name);
    });
  });

const people = {
  "identify": "f9de84865e3e8455a09af78bfe4d1da5",
  "name": "张佳玮",
  "user_type": "people",
  "url_token": "zhang-jia-wei",
  "gender": 1,
  "avatar_url": "https://pic2.zhimg.com/424c70919_is.jpg",
  "headline": "公众号：张佳玮写字的地方",
  "badge": '[{"topics":[{"introduction":"文学是语言的艺术，包括戏剧、诗歌、小说、散文等，是文化的重要组成部分。","avatar_url":"https://pic3.zhimg.com/cf0156d3a_is.jpg","name":"文学","url":"http://www.zhihu.com/api/v4/topics/19556423","type":"topic","excerpt":"文学是语言的艺术，包括戏剧、诗歌、小说、散文等，是文化的重要组成部分。","id":"19556423"}],"type":"best_answerer","description":"优秀回答者"}]',
  "is_bind_sina": 0,
  "is_active": 1,
  "is_org": 0,
  "is_blocked": 0,
  "is_blocking": 0,
  "is_followed": 0,
  "is_following": 0,
  "is_privacy_protected": 0,
  "is_advertiser": 0,
  "allow_message": 1,
  "message_thread_token": "1346424000",
  "follower_count": 1398726,
  "following_count": 84,
  "question_count": 0,
  "answer_count": 3036,
  "marked_answers_count": 135,
  "marked_answers_text": "知乎周刊、知乎圆桌和编辑推荐",
  "articles_count": 725,
  "favorite_count": 0,
  "favorited_count": 1156639,
  "columns_count": 2,
  "following_topic_count": 0,
  "following_question_count": 2714,
  "following_columns_count": 1,
  "following_favlists_count": 0,
  "thanked_count": 574381,
  "thank_from_count": 0,
  "thank_to_count": 0,
  "hosted_live_count": 12,
  "participated_live_count": 3,
  "logs_count": 11,
  "voteup_count": 3737489,
  "vote_from_count": 0,
  "vote_to_count": 0,
  "mutual_followees_count": 17,
  "pins_count": 38,
  "commercial_question_count": 0,
  "is_force_renamed": 0
};
/*
db.insert('people', people).then((res) => {
  console.log('Success : ', res);
});

db.delete(table, id).then((res) => {
  console.log('Deleted: ', res);
});

const columns = Object.keys(people);

const boolCols = [];

columns.forEach((column) => {
  if (column.startsWith('is')) {
    boolCols.push(column);
  }
});

*/
