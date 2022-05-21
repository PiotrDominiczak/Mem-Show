const initStore = {
	mems: [
		{
			index: 0,
			isStarred: false,
			title: "Trzeba pomóc",
			upvotes: 0,
			downvotes: 0,
			img: "https://i1.kwejk.pl/k/obrazki/2022/05/UtsjWUSY9InYjGcE.jpg",
		},
		{
			index: 1,
			isStarred: false,
			title: "Prawy ctrl",
			upvotes: 0,
			downvotes: 0,
			img: "https://img.besty.pl/images/409/21/4092154.jpg",
		},
		{
			index: 2,
			isStarred: false,
			title: "Informatyk u Januszexa",
			upvotes: 0,
			downvotes: 0,
			img: "https://d-art.ppstatic.pl/kadry/k/r/a8/f0/5cfa5f2bea8d6_o_full.jpg",
		},
		{
			index: 3,
			isStarred: false,
			title: "Lekcja informatyki",
			upvotes: 0,
			downvotes: 0,
			img: "https://scontent.xx.fbcdn.net/v/t1.18169-9/17156111_1463096120390730_8946338789994346171_n.jpg?stp=dst-jpg_p417x417&_nc_cat=105&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=YImCKE2ExtcAX_l9VK0&_nc_ht=scontent.xx&edm=AN6CN6oEAAAA&oh=00_AT84JYOaQuPKeR_WQVhtUVFUOlixDddUTzXUIPc0CMpBPw&oe=62AD15A3",
		},
		{
			index: 4,
			isStarred: false,
			title: "Wszystko pod kontrolem",
			upvotes: 0,
			downvotes: 0,
			img: "https://scontent.xx.fbcdn.net/v/t1.18169-9/18582510_1548992875134387_7533124591170414248_n.jpg?stp=dst-jpg_p403x403&_nc_cat=103&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=ne6ILtgPRfQAX9hrU7G&_nc_ht=scontent.xx&edm=AN6CN6oEAAAA&oh=00_AT_Jxvxl0R19ihZuQP7zZmmxW37v-k9yxdWVybg9M5aFMw&oe=62ABB7F1",
		},
		{
			index: 5,
			isStarred: false,
			title: "Wybranka serca",
			upvotes: 0,
			downvotes: 0,
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhxN11oMj0bQs_PSlUw0SQXfZkE6-793UQ&usqp=CAU",
		},
		{
			index: 6,
			isStarred: false,
			title: "Wiedz, że coś się dzieje",
			upvotes: 0,
			downvotes: 0,
			img: "https://d-art.ppstatic.pl/kadry/k/r/1/88/b2/60bf4f786648c_o_large.jpg",
		},
		{
			index: 7,
			isStarred: false,
			title: "Konflikt adresów IP",
			upvotes: 0,
			downvotes: 0,
			img: "https://www.blasty.pl/m/upload/images/large/2016/12/konflikt-adresow-ip_2016-12-13_10-55-42.jpg",
		},
		{
			index: 8,
			isStarred: false,
			title: "Romantyk",
			upvotes: 0,
			downvotes: 0,
			img: "https://d-art.ppstatic.pl/kadry/k/r/1/2a/2e/60bf4f57aad2a_o_large.jpg",
		},
		{
			index: 9,
			isStarred: false,
			title: "Zbawienny wpływ rozmarynu na pamięć",
			upvotes: 0,
			downvotes: 0,
			img: "https://scontent.xx.fbcdn.net/v/t1.18169-9/17992361_1513386332028375_3135301074857385804_n.jpg?stp=dst-jpg_p370x247&_nc_cat=109&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=0GwXD3UtibcAX8FpW62&_nc_ht=scontent.xx&edm=AN6CN6oEAAAA&oh=00_AT_2HUbZ0iiBtIzia3hwI-cZobnryST4HU9Zdd9qQq4aTQ&oe=62AAF373",
		},
		{
			index: 10,
			isStarred: false,
			title: "To tylko złudzenia",
			upvotes: 0,
			downvotes: 0,
			img: "https://scontent.xx.fbcdn.net/v/t1.6435-9/57798751_2480596688671237_3611538068202323968_n.png?stp=dst-png_p235x350&_nc_cat=104&ccb=1-7&_nc_sid=8024bb&_nc_ohc=6C-xtn9wgrgAX-Qylb2&_nc_ht=scontent.xx&edm=AN6CN6oEAAAA&oh=00_AT8IfGDTqfk3K07LeZbM4WKVr7uoJc4W1FgJXJBkcxwOvw&oe=62ADF1BF",
		},
		{
			index: 11,
			isStarred: false,
			title: "Pusty grub",
			upvotes: 0,
			downvotes: 0,
			img: "https://scontent.xx.fbcdn.net/v/t1.6435-9/57484779_2409553909078275_2915206646978314240_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=110474&_nc_ohc=gFIVojH4G5kAX_vQG93&_nc_ht=scontent.xx&edm=AN6CN6oEAAAA&oh=00_AT-ke8eS6grDQKYJKjS4T3QT8jFMG3hbYXEOF4Sy53apmA&oe=62AA36F8",
		},
	],
};
export const SET_UPVOTES = "SET_UPVOTES";
export const SET_DOWNVOTES = "SET_DOWNVOTES";
export const ADD_MEM = "ADD_MEM";
export const SET_STARRED = "SET_STARRED";

export const memReducer = (state = initStore, action) => {
	switch (action.type) {
        case ADD_MEM:
            console.log(action.payload)
            return  {
                ...state,
				mems: [...state.mems, action.payload],
			};

		case SET_STARRED:
			state.mems[action.index].isStarred
				? (state.mems[action.index].isStarred = false)
				: (state.mems[action.index].isStarred = true);

			return { ...state, mems: [...state.mems] };

		case SET_UPVOTES:
			state.mems[action.index].upvotes =
				state.mems[action.index].upvotes + 1;

			return { ...state, mems: [...state.mems] };

		case SET_DOWNVOTES:
			state.mems[action.index].downvotes =
				state.mems[action.index].downvotes + 1;

			return { ...state, mems: [...state.mems] };

		default:
			return state;
	}
};
