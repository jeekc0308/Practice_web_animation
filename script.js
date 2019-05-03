const handler = (e) => { //스크롤 될 때마다 이 이벤트 핸들러를 호출한다.
    const scrollY = window.scrollY; //window.scrollY 값은 현재 스크롤바의 Y값을 리턴한다.
    const range = window.innerHeight / 2; // 범위값을 설정한다. (ex range = 20이면 위아래로 20px씩 인식)
    console.log(window.innerHeight)
    for (let el of document.getElementsByClassName('scroll')) { //스크롤 될 때 애니메이션을 살행하는 모든 엘리먼트를 가져온다.
        if (el.offsetTop < scrollY + range && el.offsetTop > scrollY - range) { //범위 내에 있을 경우,
            if (el.classList.contains('hide')) //hide Class가 있는 경우
                el.classList.remove('hide');
            el.classList.add('show'); //show Class를 추가
        } else if (el.classList.contains('show')) { //범위 내에 존재하지 않고, show Class가 존재하는 경우
            el.classList.remove('show'); //show를 지우고,
            el.classList.add('hide'); //hide 클래스를 넣는다.
        }
    }
};
window.addEventListener('scroll', handler);
window.addEventListener('load', handler);