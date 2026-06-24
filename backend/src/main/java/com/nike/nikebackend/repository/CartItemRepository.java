package com.nike.nikebackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import com.nike.nikebackend.model.CartItem;
import com.nike.nikebackend.model.Product;
import com.nike.nikebackend.model.User;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUser(User user);

    @Transactional
    @Modifying
    void deleteByUserAndProduct(User user, Product product);
}
