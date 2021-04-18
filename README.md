- このリポジトリのコードをデプロイしているわけではなく、[Glitch](https://glitch.com/edit/#!/bramble-marvelous-tower)のプロジェクトをGAS経由で定期実行しているに過ぎません
- 手元で動作検証したいときに使う用です

## 起動の仕方

まずはリポジトリをクローンして`yarn install`します

```
$ git clone git@github.com:xrxoxcxox/c-noma-bot.git
$ yarn install
```

次に`.env.sample`を`.env`にリネームして、`DISCORD_BOT_TOKEN`と`CHANNEL_ID`に然るべき値を入れます
`DISCORD_BOT_TOKEN`についてはbot管理者に聞いてください
`CHANNEL_ID`はDiscordの`詳細設定 > 開発者モード`をONにした上で、チャンネル名を右クリックして`IDをコピー`して入力してください

ここまで出来たら、以下のコマンドを叩けば起動します

```
$ yarn start
```

ホットリロード的なものは無いので、コードを更新したら都度`control + C`で落として、再度`yarn start`を敲いてください
