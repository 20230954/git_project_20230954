package com.example.a10rd_2

import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import com.example.a10rd_2.R

class MainActivity : AppCompatActivity() {
    private val img = intArrayOf(R.drawable.img1, R.drawable.img2, R.drawable.img3 , R.drawable.img4 , R.drawable.img5)
    private var i = 0

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.btnNext).setOnClickListener {
            findViewById<ImageView>(R.id.imageView).setImageResource(img[++i % img.size])
        }
    }
}