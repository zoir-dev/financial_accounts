
const Bandlik = ({ info }: { info: any }) => {
    return (
        <div className="flex flex-col gap-1">
            <p>Bosh mexanik: {info?.bosh_mexanik}</p>
            <p>Bosh muhandis: {info?.bosh_muhandis}</p>
            <p>Bugalter: {info?.buxgalter}</p>
            <p>Direktor o&apos;rinbosari: {info?.direktor_orinbosar}</p>
            <p>Kadrlar bo&apos;limi: {info?.kadrlar_bolimi}</p>
            <p>Moliyaviy xizmat: {info?.moliyaviy_xizmat}</p>
            <p>Sifat muhandisi: {info?.sifat_muhandisi}</p>
            <p>Texnik ishlab chiqarish: {info?.texnik_ishlab_chiqarish}</p>
            <p>Xavfsizlik muhandis: {info?.xafsizlik_muhandis}</p>
            <p>Yurist maslahati: {info?.yuristkonsult}</p>

        </div>
    )
}

export default Bandlik