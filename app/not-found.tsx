 import styles from "./not-found.module.css";
 export default function NotFound() {
    return (
        <div className={styles.conteiner}>
            <dl>
                <dt className={styles.title}>
                    ページが見つかりませんでした
                </dt>
                <dd className={styles.text}>あなたがアクセスしようとしたページは存在しません。<br />
                URL を再度ご確認ください。
                </dd>
            </dl>
        </div>
    );
 }