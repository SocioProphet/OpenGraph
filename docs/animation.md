Animation
=========


애니메이션은 스타일 어트리뷰트의 변화를 시나리오로 작성하여 도형이 그려지는 시점에 애니메이팅이 되도록 해줍니다. 

애니메이션은 스타일의 "animation" 어트리뷰트와 "animation-repeat" 어트리뷰트를 사용합니다.

| 어트리뷰트       | 프로퍼티 | 타입    | 설명                   |
|------------------|----------|---------|------------------------|
| animation        | start    | Object  | 애니메이션 시작 스타일 |
|                  | to       | Object  | 애니메이션 종료 스타일 |
|                  | ms       | number  | 플레이 시간            |
|                  | delay    | number  | 플레이까지 대기시간    |
| animation-repeat |          | boolean | 반복 여부              |


등록된 애니메이션 시나리오들은 모두 동시 시작하므로, 순차 시작을 원할 경우 delay 값으로 조절해야 합니다.

또한 animation-repeat 어트리뷰트를 통해 반복 재생 여부를 결정할 수 있습니다.

아래 예제를 진행한다면, 직사각형 도형의 색상이 처음 1초간은 white 에서 black 으로, 그다음 1초간은 black 에서 white 로 반복재생 될 것 입니다.
 
```
var rect1 = canvas.drawShape([200, 200], new OG.RectangleShape(), [100, 100],
		{
			animation: [
				{
					start: {
						fill: 'white'
					},
					to: {
						fill: 'black'
					},
					ms: 1000
				},
				{
					start: {
						fill: 'black'
					},
					to: {
						fill: 'white'
					},
					ms: 1000,
					delay: 1000
				}
			],
			'animation-repeat':1,
			'fill-opacity': 1
		});
```



