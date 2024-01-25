'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState<string>('');
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.MainButton.isVisible = true;
    tg.MainButton.hide();
    tg.MainButton.text = 'Отправить данные';
    tg.headerColor = 'secondary_bg_color';
    tg.ready();
    console.log(tg);
    console.log(decodeURIComponent(tg.initData));
    const userData = decodeURIComponent(tg.initData);
    const tokens: string[] = userData.split('&');
    const user: string = tokens[1];
    console.log(user.split('='));

    const jsonData = JSON.parse(user.split('=')[1]);
    console.log(jsonData);
    setUsername(jsonData.username);
  });
  return (
    <main>
      <p>{username}</p>
    </main>
  );
}
