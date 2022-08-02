
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = True;

// 首页配置
export const homeConfig = {
  // 标题
  title: '淑娴七夕选择题',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'Hi,杜老板', },
    { key: 's', wording: '这次的礼物，用抽奖的形式', },
    { key: 'd', wording: '把选择权交给你', },
  ],
  // 最终解释权归属人
  owner: 'HGH',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 4000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 1,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '火锅走起', alias: '火锅', image: '/images/1.png',  description: '如果没有胃口，那就让火锅来吧' },
  { key: 'w', name: '美丽口红', alias: '口红', image: '/images/2.png',  description: '让口红的红凸显大佬的白' },
  { key: 'e', name: '香香护手霜', alias: '护手霜', image: '/images/3.png',  description: '芊芊玉手，需要呵护' },
  { key: 'r', name: '52红包', alias: '52', image: '/images/6.png',  description: '别怪我太抠，大了你不收' },
  { key: 't', name: '护肤套装', alias: '护肤品', image: '/images/5.png',  description: '护肤护的好，脸上痘痘少' },
  { key: 'y', name: '灵动小挂件', alias: '挂件', image: '/images/4.png',  description: '挂件不贵重，随手便可丢' },
  { key: 'u', name: '浪漫鲜花', alias: '鲜花', image: '/images/7.png',  description: '鲜花与大佬孰美，那一定是大佬美' },
  { key: 'i', name: '试试烤鱼', alias: '烤鱼', image: '/images/8.png',  description: '火锅不太行，烤鱼来打底' },
];
