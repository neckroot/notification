import { Reminder, Status } from './reminder.model';

export const reminderList: Reminder[] = [
  {
    status: Status.new,
    shortDescription: 'She said it to be.',
    fullDescription:
      "Cat, 'if you only walk long enough.' Alice felt a very humble tone, going down on one side, to look through into the garden at once; but, alas for poor Alice! when she was considering in her own child-life, and the little crocodile Improve his shining tail, And pour the waters of the conversation. Alice replied, rather shyly, 'I--I hardly know, sir, just at present--at least I know is, it would like the three gardeners, oblong and flat, with their fur clinging close to her: its face in her.",
    creationDatetime: Date.now().toString(),
    dueDatetime: (Date.now() + 1000 * 60 * 60 * 5).toString(),
  },
  {
    status: Status.expired,
    shortDescription: 'See how eagerly.',
    fullDescription:
      "I'm sure I can't take more.' 'You mean you can't help that,' said the Hatter, 'I cut some more of it in less than no time to avoid shrinking away altogether. 'That WAS a narrow escape!' said Alice, a good opportunity for repeating his remark, with variations. 'I shall sit here,' he said, turning to Alice. 'Nothing,' said Alice. 'Of course not,' said the Hatter went on 'And how many hours a day or two: wouldn't it be murder to leave off this minute!' She generally gave herself very good advice.",
    creationDatetime: (Date.now() - 1000 * 60 * 60 * 12).toString(),
    dueDatetime: (Date.now() - 1000 * 60 * 60 * 5).toString(),
  },
  {
    status: Status.executed,
    shortDescription: 'Let this be a.',
    fullDescription:
      "King. The White Rabbit cried out, 'Silence in the wind, and the words don't FIT you,' said the Hatter. Alice felt a little before she came in sight of the court. All this time the Queen shrieked out. 'Behead that Dormouse! Turn that Dormouse out of its little eyes, but it had come back again, and that's all I can creep under the circumstances. There was no one could possibly hear you.' And certainly there was nothing so VERY tired of being upset, and their slates and pencils had been to the.",
    creationDatetime: (Date.now() + 1000 * 60 * 60 * 12).toString(),
    dueDatetime: (Date.now() + 1000 * 60 * 60 * 5).toString(),
  },
  {
    status: Status.planned,
    shortDescription: 'Queen said to.',
    fullDescription:
      "I beat him when he sneezes; For he can thoroughly enjoy The pepper when he sneezes; For he can EVEN finish, if he doesn't begin.' But she did not much larger than a rat-hole: she knelt down and cried. 'Come, there's no harm in trying.' So she stood still where she was, and waited. When the procession came opposite to Alice, and sighing. 'It IS the same thing as \"I eat what I say--that's the same size: to be in before the trial's begun.' 'They're putting down their names,' the Gryphon as if she.",
    creationDatetime: (Date.now() + 1000 * 60 * 60 * 5).toString(),
    dueDatetime: (Date.now() + 1000 * 60 * 60 * 7).toString(),
  },
  {
    status: Status.new,
    shortDescription: 'She said it to be.',
    fullDescription:
      "Cat, 'if you only walk long enough.' Alice felt a very humble tone, going down on one side, to look through into the garden at once; but, alas for poor Alice! when she was considering in her own child-life, and the little crocodile Improve his shining tail, And pour the waters of the conversation. Alice replied, rather shyly, 'I--I hardly know, sir, just at present--at least I know is, it would like the three gardeners, oblong and flat, with their fur clinging close to her: its face in her.",
    creationDatetime: Date.now().toString(),
    dueDatetime: (Date.now() + 1000 * 60 * 60 * 5).toString(),
  },
  {
    status: Status.expired,
    shortDescription: 'See how eagerly.',
    fullDescription:
      "I'm sure I can't take more.' 'You mean you can't help that,' said the Hatter, 'I cut some more of it in less than no time to avoid shrinking away altogether. 'That WAS a narrow escape!' said Alice, a good opportunity for repeating his remark, with variations. 'I shall sit here,' he said, turning to Alice. 'Nothing,' said Alice. 'Of course not,' said the Hatter went on 'And how many hours a day or two: wouldn't it be murder to leave off this minute!' She generally gave herself very good advice.",
    creationDatetime: (Date.now() - 1000 * 60 * 60 * 12).toString(),
    dueDatetime: (Date.now() - 1000 * 60 * 60 * 5).toString(),
  },
  {
    status: Status.executed,
    shortDescription: 'Let this be a.',
    fullDescription:
      "King. The White Rabbit cried out, 'Silence in the wind, and the words don't FIT you,' said the Hatter. Alice felt a little before she came in sight of the court. All this time the Queen shrieked out. 'Behead that Dormouse! Turn that Dormouse out of its little eyes, but it had come back again, and that's all I can creep under the circumstances. There was no one could possibly hear you.' And certainly there was nothing so VERY tired of being upset, and their slates and pencils had been to the.",
    creationDatetime: (Date.now() + 1000 * 60 * 60 * 12).toString(),
    dueDatetime: (Date.now() + 1000 * 60 * 60 * 5).toString(),
  },
  {
    status: Status.planned,
    shortDescription: 'Queen said to.',
    fullDescription:
      "I beat him when he sneezes; For he can thoroughly enjoy The pepper when he sneezes; For he can EVEN finish, if he doesn't begin.' But she did not much larger than a rat-hole: she knelt down and cried. 'Come, there's no harm in trying.' So she stood still where she was, and waited. When the procession came opposite to Alice, and sighing. 'It IS the same thing as \"I eat what I say--that's the same size: to be in before the trial's begun.' 'They're putting down their names,' the Gryphon as if she.",
    creationDatetime: (Date.now() + 1000 * 60 * 60 * 5).toString(),
    dueDatetime: (Date.now() + 1000 * 60 * 60 * 7).toString(),
  },
];
